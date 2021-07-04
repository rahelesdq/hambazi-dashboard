import { gql, useQuery } from '@apollo/client';

const GET_ALL_PROFILES = gql`
query ListProfiles
{
  allProfile
  {
    edges
    {
      node
      {
		phoneNumber
      }
    }
  }
}`;

export default GET_ALL_PROFILES;