import { restBaseUrl, openmrsFetch } from '@openmrs/esm-framework';

export async function getCohortCategorization(uuid: string) {
  let apiUrl = `${restBaseUrl}/ugandaemr/cohortsbytype?cohortTypeUuid=${uuid}`;

  return await openmrsFetch(apiUrl);
}
