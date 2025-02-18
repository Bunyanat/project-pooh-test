import React, { useState } from "react";

interface IncomePopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IncomePopup({ isOpen, onClose }: IncomePopupProps) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Saving Income:", { amount, description });
    onClose(); // ปิด Popup หลังจากบันทึก
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">เพิ่มรายรับ</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">จำนวนเงิน</label>
            <input
              type="number"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">รายละเอียด</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="flex justify-end">
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded-lg mr-2">ยกเลิก</button>
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">บันทึก</button>
          </div>
        </form>
      </div>
    </div>
  );
}
