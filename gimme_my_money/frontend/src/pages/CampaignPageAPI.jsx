import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CampaignDetails from './CampaignDetails';
import NavBlock from './home_blocks/NavBlock';
import FooterBlock from './home_blocks/FooterBlock';
import { Box } from '@mui/material';

const CampaignPageAPI = () => {
  const { id } = useParams();
  const [campaign, setCampaign] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaign = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/campaigns/${id}`);
        setCampaign(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching campaign data');
        setLoading(false);
      }
    };

    fetchCampaign();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <CampaignDetails campaign={campaign} />
    
    </>
  );
};

export default CampaignPageAPI;
