"use client";

import { useAppSelector } from "@/store";
import { SimpleWidget } from "./SimpleWidget";
import { IoCart } from "react-icons/io5";

export const WidgetsGrid = () => {
  const count = useAppSelector((state) => state.counter.count);

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={count}
        label="Contador"
        subtitle="Productos en el carrito de compras"
        icon={<IoCart size={50} className="text-blue-500" />}
        href="/dashboard/counter"
      />
      {/* <SimpleWidget /> */}
    </div>
  );
};
