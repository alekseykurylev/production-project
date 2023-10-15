import * as React from "react";
import { Modal } from "shared/ui/Modal/Modal";
import { classNames } from "shared/lib/classNames";
import { LoginForm } from "../LoginForm";
import styles from "./LoginModal.module.scss";

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const LoginModal: React.FC<LoginModalProps> = (props) => {
  const { className, isOpen, onClose } = props;

  return (
    <Modal
      lazy
      className={classNames(styles.LoginModal, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}>
      <LoginForm />
    </Modal>
  );
};
