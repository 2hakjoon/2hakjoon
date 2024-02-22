"use client";

import { EmployeeCountBarChart } from "@/components/chart/EmployeeCountBarChart";

function EmployeePage() {
  return (
    <div>
      <h1>직원 대시보드</h1>
      <div style={{ width: "1000px", height: "500px" }}>
        {<EmployeeCountBarChart />}
      </div>
    </div>
  );
}

export default EmployeePage;
