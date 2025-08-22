// components/stock/StockListHeader.tsx
import React from "react";
import Button from "../../../../components/common/ui/Button";
import { Plus } from "lucide-react";

interface StockListHeaderProps {
  onAddStock: () => void;
}

export const StockListHeader: React.FC<StockListHeaderProps> = ({
  onAddStock,
}) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-semibold text-gray-900">My Stock List</h2>
      <Button
        onClick={onAddStock}
        startIcon={<Plus className="w-4 h-4" />}
        className="px-6"
      >
        Add Stock
      </Button>
    </div>
  );
};
