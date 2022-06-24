import Image from 'next/image';
import { IMovie } from '../types/movies.types';
import { ROW_IMAGE_URL } from '../utils/consts';

interface IProps {
  movie: IMovie;
}

function Thumnail({ movie }: IProps) {
  return (
    <div className="relative h-28 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-105">
      <Image
        src={ROW_IMAGE_URL + movie.backdrop_path || movie.poster_path}
        className="rounded-sm object-cover md:rounded"
        layout="fill"
      />
    </div>
  );
}

export default Thumnail;
