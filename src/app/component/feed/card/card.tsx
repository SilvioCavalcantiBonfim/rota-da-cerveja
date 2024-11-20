import React from "react";
import "./card.css";

export type Publication = {
  author: string;
  publication_date: string;
  summary: string;
  followed: boolean;  // Apenas a propriedade "followed" agora
};

export const Card: React.FunctionComponent<Publication> = (props: Publication) => {
  return (
    <div className="max-w-md mx-auto mt-8 in">
      <div className="card swing-in-top-fwd w-full">
        <div className="flex items-center mt-4">
          <div className="profile-icon mr-2">{props.author.toUpperCase().at(0)}</div>
          <p className="author">
            <div>
            Por <span className="font-semibold">{props.author}</span>
            </div>
            {props.followed && (
              <span className="ml-2 text-green-500 font-bold text-sm text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="rgba(255,255,255,1)"><path d="M13 14.0619V22H4C4 17.5817 7.58172 14 12 14C12.3387 14 12.6724 14.021 13 14.0619ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM17.7929 19.9142L21.3284 16.3787L22.7426 17.7929L17.7929 22.7426L14.2574 19.2071L15.6716 17.7929L17.7929 19.9142Z"></path></svg>
              </span>
            )}
          </p>
        </div>
        <p className="text-gray-300 my-2">{props.summary}</p>
        <p className="text-gray-400 text-sm mb-4">Publicado em {props.publication_date}</p>
      </div>
    </div>
  );
};
