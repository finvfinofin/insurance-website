import React from "react";
import CloseIcon from "@/public/images/icons/closeIcon.png";
import JModal from "@/public/images/JModal.png";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  isThankyou: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  isThankyou,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50">
      <div className="relative bg-white rounded-2xl shadow-lg">
        <div className="absolute right-0 z-1">
          <Image
            src={JModal}
            alt="J Image"
            height={100}
            width={100}
            className={
              isThankyou ? `w-[21rem] h-[30rem]` : `w-[15rem] h-[22rem]`
            }
          />
        </div>
        <button className="absolute top-1 right-1" onClick={onClose}>
          <Image src={CloseIcon} alt="Close" height={32} width={32} />
        </button>
        <div className="p-6 z-2">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
