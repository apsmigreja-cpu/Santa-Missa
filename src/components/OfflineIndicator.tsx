import React from 'react';
import { WifiOff } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 z-50 flex items-center gap-2 rounded-xl bg-[#5C1D2A] border border-[#C59B27] px-3.5 py-2 text-xs font-medium text-white shadow-xl animate-bounce"
    >
      <WifiOff className="w-4 h-4 text-[#E5C158]" />
      <span>Modo Offline — Você está lendo o conteúdo salvo em cache local.</span>
    </div>
  );
};
