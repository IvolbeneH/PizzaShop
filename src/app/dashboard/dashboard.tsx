import { DayOrdersAmountCard } from "./day-orders-amount-card";
import { MonthOrdersAmountCard } from "./month-orders-amount-card";
import { MonthRevenueCard } from "./month-revenue-card";
import { MonthCanceledOrderAmount } from "./mounth-canceled-order-amount";
import { PopularProductsCharts } from "./popular-products-charts";
import { RevenueChart } from "./revenue-chart";

export function Dashboard() {
    return (
        <div>
            <div className="flex flex-col gap-4">
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <MonthRevenueCard />
                    <MonthOrdersAmountCard />
                    <DayOrdersAmountCard />
                    <MonthCanceledOrderAmount />
                </div>
                <div className="lg:grid lg:grid-cols-9 gap-4">
                    <RevenueChart />
                    <PopularProductsCharts />
                </div>
            </div>
        </div>
    );
};
