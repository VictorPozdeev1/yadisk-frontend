import { useHttp } from "./dist/useHttp";

const YaService = () => {
  const request = useHttp();

  const _apiBase = "https://cloud-api.yandex.net/v1/disk/resources";

  const getAllCategoriesName = async () => {
    const res = await request(`${_apiBase}?path=CaseLabDocuments`);
    return await res._embedded.items.map((el: any) => el.name);
  };

  const getAllItems = async (category: string | undefined) => {
    const res = await request(`${_apiBase}?path=CaseLabDocuments/${category}`);
    return await res._embedded.items.map((item: any) => {
        const pathParts = item.path.split('/');
        const category = pathParts[pathParts.length - 2];
        return {
            ...item,
            category: category
        };
    });
};

  return {
    getAllCategoriesName,
    getAllItems,
  };
};

export default YaService;
