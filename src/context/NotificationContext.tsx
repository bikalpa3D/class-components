import React, { createContext, useContext, useEffect, useState } from "react";
import type { ProjectNotification } from "../types/projectTypes";

type ContextValue = {
  notifications: ProjectNotification[];
  add: (n: ProjectNotification) => void;
  markSeen: (id: string) => void;
};

const NotificationContext = createContext<ContextValue | undefined>(undefined);

export const NotificationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [notifications, setNotifications] = useState<ProjectNotification[]>(
    () => {
      try {
        const raw = localStorage.getItem("app_notifications");
        return raw ? JSON.parse(raw) : [];
      } catch {
        return [];
      }
    }
  );

  useEffect(() => {
    localStorage.setItem("app_notifications", JSON.stringify(notifications));
  }, [notifications]);

  const add = (n: ProjectNotification) =>
    setNotifications((prev) => [n, ...prev]);
  const markSeen = (id: string) =>
    setNotifications((prev) =>
      prev.map((p) => (p.id === id ? { ...p, seen: true } : p))
    );

  return (
    <NotificationContext.Provider value={{ notifications, add, markSeen }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const ctx = useContext(NotificationContext);
  if (!ctx)
    throw new Error(
      "useNotificationContext must be used inside NotificationProvider"
    );
  return ctx;
};
