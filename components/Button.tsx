import Image from "next/image";

type buttonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

function Button({ type, title, icon, variant, full }: buttonProps) {
  return (
    <button
      type={type}
      className={`${variant} flexCenter gap-3 rounded-full border`}
    >
      {icon && <Image src={icon} width={24} height={24} alt={title} />}
      <label htmlFor="" className="cursor-pointer">
        {title}
      </label>
    </button>
  );
}

export default Button;
