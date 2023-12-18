'use client';

import React from "react";


export const useSetTab = <T>(name:T) => {
    const [tab, setTab] = React.useState<T>(name);
    return { tab, setTab }
}