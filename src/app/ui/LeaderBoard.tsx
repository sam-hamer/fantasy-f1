interface Props {
    location: string;
  }

export default function LeaderBoard({location}:Props) {
    return (
    <div className="flex">
        <h1 className="text-5xl font-signature ml-2">
            {location} 
        </h1>
    </div>
    );
}