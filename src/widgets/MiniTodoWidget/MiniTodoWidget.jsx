import { useState } from "react";
import "./MiniTodoWidget.scss";
import Modal from "@/shared/ui/popup/Modal";

function MiniTodoWidget() {
  const [isListOpen, setIsListOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div
      className="glassWidgets todo_widget"
      onClick={() => setIsListOpen(true)}
    >
      <h1>ToDo List</h1>

      <Modal
        isOpen={isListOpen}
        onClose={() => setIsListOpen(false)}
        title="ToDo List"
      >
        <p>Здесь будут задачи</p>
        <button
          onClick={() => {
            setIsListOpen(false);
            setIsFormOpen(true);
          }}
        >
          +
        </button>
      </Modal>
    </div>
  );
}

export default MiniTodoWidget;
