import * as React from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { Button, ThemeButton } from "shared/ui/Button";
import { Portal } from "shared/ui/Portal";
import CrossIcon from "shared/assets/icons/cross.svg";
import styles from "./Modal.module.scss";

interface ModalProps {
  className?: string;
  children: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = (props) => {
  const { className, children, isOpen, onClose } = props;

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
  };

  const closeHandler = React.useCallback(() => {
    if (onClose) {
      onClose();
    }
  }, [onClose]);

  const onContentClick = (evt: React.MouseEvent) => {
    evt.stopPropagation();
  };

  const onKeyDown = React.useCallback(
    (evt: KeyboardEvent) => {
      if (evt.key === "Escape") {
        closeHandler();
      }
    },
    [closeHandler],
  );

  React.useEffect(() => {
    if (isOpen) {
      window.addEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClick}>
            <Button className={styles.close} onClick={onClose} theme={ThemeButton.CLEAR}>
              <CrossIcon width={14} height={14} />
            </Button>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
