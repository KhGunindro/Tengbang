import React, { useState, useEffect } from 'react';
import { useStateContext } from '../context';
import { DisplayCampaigns } from '../components';
import { daysLeft } from '../utils';

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [campaigns, setCampaigns] = useState([]);

  const { address, contract, getCampaigns } = useStateContext();

  const fetchCampaigns = async () => {
    setIsLoading(true);
    const data = await getCampaigns();
    setCampaigns(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (contract) fetchCampaigns();
  }, [address, contract]);

  const filteredCampaigns = campaigns.filter(campaign => daysLeft(campaign.deadline) >= 0);
  const activeCampaignsCount = filteredCampaigns.length;
  const anyCampaignExpired = activeCampaignsCount < campaigns.length;
  const title = `All Campaigns (${activeCampaignsCount})`;

  return (
    <DisplayCampaigns
      title={title}
      isLoading={isLoading}
      campaigns={filteredCampaigns}
    />
  );
};

export default Home;