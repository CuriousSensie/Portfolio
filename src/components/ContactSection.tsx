// ============================================================
// ContactSection - Contact form section with EmailJS integration
// ============================================================

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from 'emailjs-com';
import { SECTIONS, ANIMATION_CONFIG } from '@/constants';
import { SectionHeader } from '@/components/shared';
import type { ContactFormData } from '@/types';

// ============================================================
// Form Field Configuration
// ============================================================

interface FormFieldConfig {
  name: keyof ContactFormData;
  type: 'text' | 'email' | 'textarea';
  placeholder: string;
  rows?: number;
}

const FORM_FIELDS: FormFieldConfig[] = [
  { name: 'name', type: 'text', placeholder: '"Your Name"' },
  { name: 'email', type: 'email', placeholder: '"you@email.com"' },
  { name: 'message', type: 'textarea', placeholder: '"Your message here..."', rows: 5 },
];

// ============================================================
// Initial Form State
// ============================================================

const INITIAL_FORM_STATE: ContactFormData = {
  name: '',
  email: '',
  message: '',
};

// ============================================================
// Status Message Configuration
// ============================================================

type StatusType = 'success' | 'error' | null;

interface StatusState {
  type: StatusType;
  message: string;
}

const STATUS_MESSAGES = {
  success: 'Message sent successfully!',
  error: 'Failed to send message. Please try again later.',
} as const;

const STATUS_DISPLAY_DURATION = 3000;

// ============================================================
// Sub-components
// ============================================================

/** Terminal-style header with colored dots */
const TerminalHeader = () => (
  <div className="flex items-center gap-2 pb-4 border-b border-border mb-2">
    <div className="w-3 h-3 rounded-full bg-destructive/80" />
    <div className="w-3 h-3 rounded-full bg-accent/80" />
    <div className="w-3 h-3 rounded-full bg-terminal-green/80" />
    <span className="ml-3 font-mono text-xs text-muted-foreground">contact_form.sh</span>
  </div>
);

interface FormFieldProps {
  config: FormFieldConfig;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
}

/** Individual form field with variable label */
const FormField = ({ config, value, onChange, disabled }: FormFieldProps) => {
  const inputClasses =
    'w-full bg-secondary border border-border rounded-sm px-4 py-3 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed';

  return (
    <div>
      <label className="font-mono text-xs text-muted-foreground block mb-2">
        <span className="text-primary">const</span> {config.name}{' '}
        <span className="text-muted-foreground">=</span>
      </label>
      {config.type === 'textarea' ? (
        <textarea
          name={config.name}
          value={value}
          onChange={onChange}
          rows={config.rows}
          placeholder={config.placeholder}
          className={`${inputClasses} resize-none`}
          disabled={disabled}
          required
        />
      ) : (
        <input
          type={config.type}
          name={config.name}
          value={value}
          onChange={onChange}
          placeholder={config.placeholder}
          className={inputClasses}
          disabled={disabled}
          required
        />
      )}
    </div>
  );
};

interface StatusMessageProps {
  status: StatusState;
}

/** Animated status message display */
const StatusMessage = ({ status }: StatusMessageProps) => (
  <AnimatePresence>
    {status.type && (
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className={`font-mono text-sm text-center py-2 rounded-sm ${
          status.type === 'success'
            ? 'text-terminal-green bg-terminal-green/10 border border-terminal-green/30'
            : 'text-destructive bg-destructive/10 border border-destructive/30'
        }`}
      >
        <span className="text-muted-foreground mr-2">{'>'}</span>
        {status.message}
      </motion.div>
    )}
  </AnimatePresence>
);

interface SubmitButtonProps {
  isSubmitting: boolean;
}

/** Animated submit button */
const SubmitButton = ({ isSubmitting }: SubmitButtonProps) => (
  <motion.button
    type="submit"
    disabled={isSubmitting}
    className={`w-full bg-primary text-primary-foreground font-mono text-sm font-semibold py-3 rounded-sm hover:shadow-[0_0_25px_hsl(175_80%_50%/0.4)] transition-all duration-300 ${
      isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
    }`}
    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
  >
    {'>'} {isSubmitting ? 'sending...' : 'send_message()'}
  </motion.button>
);

// ============================================================
// Main Component
// ============================================================

const ContactSection = () => {
  const [form, setForm] = useState<ContactFormData>(INITIAL_FORM_STATE);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<StatusState>({ type: null, message: '' });
  const { tag, title, description } = SECTIONS.contact;

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setStatus({ type: null, message: '' });

      const emailParams = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          emailParams,
          import.meta.env.VITE_EMAILJS_USER_ID
        );

        setStatus({ type: 'success', message: STATUS_MESSAGES.success });
        setForm(INITIAL_FORM_STATE);
      } catch (error) {
        setStatus({ type: 'error', message: STATUS_MESSAGES.error });
      } finally {
        setIsSubmitting(false);

        // Clear status message after duration
        setTimeout(() => {
          setStatus({ type: null, message: '' });
        }, STATUS_DISPLAY_DURATION);
      }
    },
    [form]
  );

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="relative z-10 max-w-3xl mx-auto px-6">
        <SectionHeader tag={tag} title={title} description={description} centered />

        <motion.form
          {...ANIMATION_CONFIG.fadeInUp}
          transition={{ ...ANIMATION_CONFIG.fadeInUp.transition, delay: 0.2 }}
          className="space-y-5 border border-border rounded-sm p-8 bg-card/50 glow-box"
          onSubmit={handleSubmit}
        >
          <TerminalHeader />

          <StatusMessage status={status} />

          <div className="space-y-4">
            {FORM_FIELDS.map((field) => (
              <FormField
                key={field.name}
                config={field}
                value={form[field.name]}
                onChange={handleChange}
                disabled={isSubmitting}
              />
            ))}
          </div>

          <SubmitButton isSubmitting={isSubmitting} />
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
