"use client";

import { RecipientCountBarChart } from "@/components/chart/RecipientCountBarChart";

function RecipientPage() {
  return (
    <div>
      <h1>수급자 대시보드</h1>
      <div style={{ width: "1000px", height: "500px" }}>
        {<RecipientCountBarChart />}
      </div>
    </div>
  );
}

export default RecipientPage;
