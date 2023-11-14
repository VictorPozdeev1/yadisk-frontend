import { useHttp } from "./useHttp";

const _transformItems = (item: any) => {
  return {
    src: item.preview,
    pathForDownload: item.file,
    name: item.name,
    id: item.resource_id,
    url: item.sizes[0].url,
  };
};

const YaService = () => {
  const request = useHttp();

  const _apiBase = "https://cloud-api.yandex.net/v1/disk/resources";

  const getAllCategoriesName = async () => {
    const res = await request(`${_apiBase}?path=CaseLabDocuments`);
    return await res._embedded.items.map((el: any) => el.name);
  };

  const getAllItems = async () => {
    const res = await request(`${_apiBase}/files?fields=CaseLabDocuments`);
    return await res.items.map(_transformItems);
  };

  return {
    getAllCategoriesName,
    getAllItems,
  };
};

export default YaService;
