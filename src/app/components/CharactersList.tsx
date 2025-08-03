"use client";

import { useQuery } from "@apollo/client";
import { GET_CHARACTERS } from "../graphql/queries/characters";

const CharacterList = () => {
  const { data, loading, error } = useQuery(GET_CHARACTERS);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>Ошибка: {error.message}</p>;
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {data.characters.results.map((char: any) => (
        <div
          key={char.id}
          className="border p-4 rounded shadow bg-white dark:bg-gray-800"
        >
          <img
            src={char.image}
            alt={char.name}
            className="w-24 mx-auto mb-2 rounded-full"
          />
          <h3 className="text-center font-semibold">{char.name}</h3>
          <p className="text-center text-sm text-gray-500">{char.status}</p>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
