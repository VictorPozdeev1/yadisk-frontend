import { useHttp } from "../hooks/useHttp";

const YaService = () => {
  const request = useHttp();

  const _apiBase = "https://cloud-api.yandex.net/v1/disk/resources";

  const getAllCategoriesName = async () => {
    const res = await request(`${_apiBase}?path=CaseLabDocuments`);
    return await res._embedded.items.map((el: any) => el.name);
  };

  const getAllItems = async () => {
    const res = await request(`${_apiBase}/files?fields=CaseLabDocuments`);
    return await res;
  };

  //   const _transformCharacter = (char: any) => {
  //     return {
  //       id: char.id,
  //       name: char.name,
  //       description: char.description
  //         ? `${char.description.slice(0, 210)}...`
  //         : "There is no description for this character",
  //       thumbnail: char.thumbnail.path + "." + char.thumbnail.extension,
  //       homepage: char.urls[0].url,
  //       wiki: char.urls[1].url,
  //       comics: char.comics.items,
  //     };
  //   };

  const getComic = async (id: string) => {
    // const res = await request(`${_apiBase}comics/${id}?${_apiKey}`);
    // return _transformComic(res.data.results[0]);
  };

  return {
    getAllCategoriesName,
    getAllItems,
  };
};

export default YaService;
