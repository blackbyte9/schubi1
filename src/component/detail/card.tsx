import React from "react";
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface DetailCardProps extends React.ComponentProps<"div"> {
    title: string;
    children?: React.ReactNode;
}

export function DetailCard({ title, children }: DetailCardProps) {
    return (
        <div className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent>
                    {children ? children : <p>Empty</p>}
                </CardContent>
            </Card>
        </div>
    );
}
