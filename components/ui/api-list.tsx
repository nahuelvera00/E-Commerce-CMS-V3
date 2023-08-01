"use client";

import { useOrigin } from "@/hooks/use-origin";
import { useParams } from "next/navigation";
import { ApiALert } from "./api-alert";

interface ApiListProps {
    entityName: string;
    entityIdName: string;
}

export const ApiList: React.FC<ApiListProps> = ({
    entityIdName,
    entityName,
}) => {
    const params = useParams();
    const origin = useOrigin();

    const baseUrl = `${origin}/api/${params.storeId}`;

    return (
        <>
            <ApiALert
                title="GET"
                variant="public"
                description={`${baseUrl}/${entityName}`}
            />
            <ApiALert
                title="GET"
                variant="public"
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
            <ApiALert
                title="POST"
                variant="admin"
                description={`${baseUrl}/${entityName}`}
            />
            <ApiALert
                title="PATCH"
                variant="admin"
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
            <ApiALert
                title="DELETE"
                variant="public"
                description={`${baseUrl}/${entityName}/{${entityIdName}}`}
            />
        </>
    );
};
