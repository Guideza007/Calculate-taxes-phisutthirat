import React from "react";
import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const { formData } = location.state;

  let salary = parseInt(formData.salary);
  let Incomeallyear = salary * 12 + parseInt(formData.bonus);
  let expenses = Incomeallyear * 0.5 <= 100000 ? Incomeallyear * 0.5 : 100000;
  let child = formData.children * 30000 <= 60000 ? formData.children * 30000 : 60000;
  let social = parseInt(formData.social);
  let insurance = parseInt(formData.jbo);
  let Deduction = 60000 + child + social + insurance;
  let Netassessableincome = Incomeallyear - Deduction - expenses;

  let tax = 0;
  if (Netassessableincome <= 100000) tax = 0;
  else if (Netassessableincome <= 300000) tax = 0.05;
  else if (Netassessableincome <= 1000000) tax = 0.1;
  else tax = 0.15;

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-10 px-4">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">
          ผลลัพธ์
        </h1>
        <div className="space-y-4">
          <p className="text-lg">
            <strong>เงินได้ทั้งปี:</strong>{" "}
            <span className="text-blue-500">{Incomeallyear.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>ค่าใช้จ่าย:</strong>{" "}
            <span className="text-blue-500">{expenses.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>ค่าลดหย่อน:</strong>{" "}
            <span className="text-blue-500">{Deduction.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>เงินได้พึงประเมินสุทธิ:</strong>{" "}
            <span className="text-blue-500">{Netassessableincome.toLocaleString()} บาท</span>
          </p>
          <p className="text-lg">
            <strong>อัตราภาษี (%):</strong>{" "}
            <span className="text-blue-500">{(tax * 100).toFixed(2)}%</span>
          </p>
          <p className="text-lg">
            <strong>ภาษีที่ต้องชำระ:</strong>{" "}
            <span className="text-blue-500">{(Netassessableincome * tax).toLocaleString()} บาท</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Results;
