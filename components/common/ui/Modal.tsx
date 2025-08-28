// components/ui/Modal.tsx
"use client";
import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  className?: string;
  overlayClassName?: string;
  showHeader?: boolean;
  footer?: React.ReactNode;
  centered?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  className = "",
  overlayClassName = "",
  showHeader = true,
  footer,
  centered = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const getSizeClasses = () => {
    switch (size) {
      case "xs":
        return "max-w-xs w-full";
      case "sm":
        return "max-w-sm w-full";
      case "lg":
        return "max-w-lg w-full";
      case "xl":
        return "max-w-xl w-full";
      case "2xl":
        return "max-w-2xl w-full";
      case "full":
        return "max-w-full w-full h-full";
      default:
        return "max-w-md w-full";
    }
  };

  const getModalClasses = () => {
    let classes = `bg-white rounded-2xl shadow-2xl transform transition-all duration-300 ${getSizeClasses()}`;
    
    if (size === "full") {
      classes += " rounded-none";
    } else {
      classes += " m-4";
    }
    
    if (className) classes += ` ${className}`;
    
    return classes;
  };

  const getOverlayClasses = () => {
    let classes = "fixed inset-0 z-50 overflow-auto backdrop-blur-sm bg-gray-900/50 transition-opacity duration-300";
    
    if (centered && size !== "full") {
      classes += " flex items-center justify-center p-4";
    } else {
      classes += " flex items-start justify-center pt-16 pb-4";
    }
    
    if (overlayClassName) classes += ` ${overlayClassName}`;
    
    return classes;
  };

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (closeOnEscape && event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, closeOnEscape, onClose]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={getOverlayClasses()} onClick={handleOverlayClick}>
      <div ref={modalRef} className={getModalClasses()}>
        {/* Header */}
        {showHeader && (title || showCloseButton) && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            {title && (
              <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
            )}
            {showCloseButton && (
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            )}
          </div>
        )}

        {/* Content */}
        <div className={`${showHeader && (title || showCloseButton) ? "p-6" : "p-6"} ${footer ? "pb-0" : ""}`}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-gray-200">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
