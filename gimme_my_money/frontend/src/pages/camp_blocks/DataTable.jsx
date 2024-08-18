import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'campaignName', headerName: 'Campaign Name', width: 200 },
  { field: 'goal', headerName: 'Goal ($)', type: 'number', width: 130 },
  { field: 'amountRaised', headerName: 'Amount Raised ($)', type: 'number', width: 150 },
  { field: 'backers', headerName: 'Backers', type: 'number', width: 120 },
  {
    field: 'status',
    headerName: 'Status',
    width: 160,
  },
];

const rows = [
  { id: 1, campaignName: 'Eco-Friendly Water Bottle', goal: 10000, amountRaised: 8500, backers: 120, status: 'Active' },
  { id: 2, campaignName: 'Smart Wallet', goal: 20000, amountRaised: 19000, backers: 250, status: 'Active' },
  { id: 3, campaignName: 'Portable Solar Charger', goal: 15000, amountRaised: 15000, backers: 300, status: 'Funded' },
  { id: 4, campaignName: 'Noise Cancelling Earbuds', goal: 50000, amountRaised: 40000, backers: 800, status: 'Active' },
  { id: 5, campaignName: 'Smartphone Gimbal', goal: 25000, amountRaised: 27000, backers: 350, status: 'Funded' },
  { id: 6, campaignName: 'Fitness Tracker', goal: 30000, amountRaised: 28000, backers: 600, status: 'Active' },
  { id: 7, campaignName: '3D Printing Pen', goal: 12000, amountRaised: 10000, backers: 220, status: 'Active' },
  { id: 8, campaignName: 'Smart Home Hub', goal: 40000, amountRaised: 38000, backers: 450, status: 'Active' },
  { id: 9, campaignName: 'Wireless Charging Pad', goal: 18000, amountRaised: 17000, backers: 310, status: 'Active' },
  { id: 10, campaignName: 'Eco-Friendly Packaging', goal: 15000, amountRaised: 15000, backers: 280, status: 'Funded' },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
