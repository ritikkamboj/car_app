import Image from "next/image";

type buttonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
};

function Button({ type, title, icon, variant }: buttonProps) {
  return (
    <button
      type={type}
      className={`${variant} flexCenter gap-3 rounded-full border`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label htmlFor="">{title}</label>
    </button>
  );
}

export default Button;
