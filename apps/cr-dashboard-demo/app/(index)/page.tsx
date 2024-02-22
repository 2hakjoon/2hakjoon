import { EmployeeCountBarChart } from "@/components/chart/EmployeeCountBarChart";
import { FakeChart } from "@/components/chart/FakeChart";
import { RecipientCountBarChart } from "@/components/chart/RecipientCountBarChart";
import { RecipientEmployeeCountOverlayChart } from "@/components/chart/RecipientEmployeeCountOverlayChart";

export default function Home() {
  return (
    <div>
      <h1>통합 대시보드</h1>
      <div className="grid grid-cols-2">
        <div style={{ width: "1000px", height: "500px" }}>
          {<RecipientCountBarChart />}
        </div>
        <div style={{ width: "1000px", height: "500px" }}>
          {<EmployeeCountBarChart />}
        </div>
        <div style={{ width: "1000px", height: "500px" }}>
          <RecipientEmployeeCountOverlayChart />
        </div>
        <div style={{ width: "1000px", height: "500px" }}>
          <FakeChart />
        </div>
      </div>
    </div>
  );
}
