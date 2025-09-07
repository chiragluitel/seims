import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { FiCheckCircle } from "react-icons/fi";

interface SuccessPopUpModalProps {
  title: string;
  label: string;
  isOpen: boolean;
  onClose: () => void;
}

const SuccessPopUpModal: React.FC<SuccessPopUpModalProps> = ({
  isOpen,
  onClose,
  title,
  label,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true" />
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <DialogPanel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all">
          <div className="flex justify-center">
            <FiCheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <DialogTitle className="text-xl font-bold text-gray-900 text-center mt-4">
            {title}
          </DialogTitle>
          <p className="mt-2 text-center text-gray-600">{label}</p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-black text-white rounded-lg shadow cursor-pointer hover:bg-gray-900 transition-colors"
            >
              Confirm
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default SuccessPopUpModal;
