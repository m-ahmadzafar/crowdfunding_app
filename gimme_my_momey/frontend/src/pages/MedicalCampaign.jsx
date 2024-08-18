import React from 'react';
import CampaignDetails from './CampaignDetails';

const MedicalCampaign = () => {
  const campaign = {
    title: 'Medical Relief Fund for John Doe',
    amountRaised: 15000,
    goal: 50000,
    contributors: 250,
    description: 'John Doe was involved in a severe accident and needs urgent medical treatment. This campaign aims to raise funds for his hospital bills and ongoing care.',
    paymentMethods: ['Donate via Credit Card', 'Bank Transfer', 'PayPal', 'Send a Check']
  };

  return <CampaignDetails campaign={campaign} />;
};

export default MedicalCampaign;
