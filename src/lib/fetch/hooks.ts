import useSWR, { SWRConfiguration, SWRResponse } from 'swr'

const fetcher = <Data>(uri: string): Promise<Data> => {
  return fetch(uri).then((res) => (res.json() as any) as Data)
}

export const useSWRFetch = <Data, Error = any>(
  uri: string,
  config?: SWRConfiguration<Data, Error>,
): SWRResponse<Data, Error> => {
  return useSWR<Data, Error>(uri, fetcher, config)
}
