import { getRaces } from "../lib/db";

export default async function SeasonPage() {
  const races = await getRaces();

  return (
    <div className="columns-1 sm:columns-2">
      <ul>
        {races.map((race: any) => (
          <li key={race._id.toString()} className="py-3 rounded-xl">
            <div className="p-6 rounded-xl bg-red-700 flex flex-row">
              <p className="text-l font-medium text-white px-2 flex-grow">
                {race.location}
              </p>
              <p className="text-m font-medium text-white px-2">{race.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
