const photonAppId = "2fab1626-d4ee-4d08-a061-df088d84333a";  // Replace with your actual App ID
const photonRegion = "eu;us;asia;" // Replace with your Photon region

const photonClient = new Photon.LoadBalancing.LoadBalancingClient(photonRegion, photonAppId);

photonClient.connect();
