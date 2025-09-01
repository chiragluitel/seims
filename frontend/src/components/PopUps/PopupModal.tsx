import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";

interface PopupModalProps{
    title: string,
    label: string,
    isOpen: boolean,
    onClose: () => void
    onSubmit: (e: React.FormEvent<HTMLFormElement>) =>void
}

const PopupModal:React.FC<PopupModalProps> = ({ isOpen, onClose, onSubmit, title, label }) => {

    return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-xl transition-all">
            <DialogTitle className="text-2xl font-semibold text-gray-800 mb-4">
              {title}
            </DialogTitle>
  
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="stock"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {label}
                </label>
                <input
                  name="productQuantity"
                  type="number"
                  id="stock"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Enter amount"
                  required
                />
              </div>
  
              <div className="flex justify-end space-x-3 mt-6">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2 border border-gray-300 cursor-pointer rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-black text-white rounded-lg shadow cursor-pointer hover:bg-gray-900 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    );
  };
  export default PopupModal;