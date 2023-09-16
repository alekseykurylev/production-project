import type { Meta } from "@storybook/react";
import { useState } from "react";
import { Modal } from "./Modal";

const meta = {
  title: "shared/Modal",
  component: Modal,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
  args: {
    children: "children",
  },
} satisfies Meta<typeof Modal>;

export default meta;

export const Usage = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={toggleModal} type='button'>
        open modal
      </button>

      <Modal isOpen={isOpen} onClose={toggleModal}>
        <h3>Default</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
          est laborum.
        </p>
      </Modal>
    </div>
  );
};
