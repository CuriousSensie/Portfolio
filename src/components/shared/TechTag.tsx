// ============================================================
// TechTag - Technology badge component
// ============================================================

interface TechTagProps {
  /** Technology name */
  name: string;
  /** Optional size variant */
  size?: 'sm' | 'md';
}

export const TechTag = ({ name, size = 'md' }: TechTagProps) => {
  const sizeClasses = {
    sm: 'text-[11px]',
    md: 'text-xs',
  };

  return (
    <span className={`tech-tag ${sizeClasses[size]}`}>
      {name}
    </span>
  );
};

export default TechTag;
