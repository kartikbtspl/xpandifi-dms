"use client"
import React, { useState } from 'react'
import getTerritoryDetailsCol from './getTerritoryDetailsCol';
import Table from '@/components/common/table/Table';

function TerritoryDetails() {

  const [territoryData, setTerritoryData] = useState([
    {
      id: 1,
      srNo : "01",
      distributorName: "",
      routeName: ""
    },
    {
      id: 2,
      srNo : "02",
      distributorName: "",
      routeName: ""
    },
  ])

  const [loadingTerritory, setLoadingTerritory] = useState(false);

  const teitoryColumns = getTerritoryDetailsCol();

  const handleRefreshTerritory = () => {
    setLoadingTerritory(true);
    setTimeout(() => {
      setLoadingTerritory(false);
      // Optionally re-fetch or reset data here
    }, 1000);
  };

  return (
    <div>
      <Table
            rows={territoryData}
            columns={teitoryColumns}
            onRefresh={handleRefreshTerritory}
            loading={loadingTerritory}
            showPagination
            rowsPerPage={3}
          />
    </div>
  )
}

export default TerritoryDetails