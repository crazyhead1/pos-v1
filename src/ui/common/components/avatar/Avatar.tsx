import React, { FC, useMemo } from "react";
import ReactAvatar from "react-avatar";

// import { S3_BUCKET_URL } from '../../../constants/CommonConstants';

// colors
import { Colors } from "../../colors";

// styles
import { useStyles } from "./Avatar.styles";
import { IAvatarProps, avatarType } from "./Avatar.types";

const Avatar: FC<IAvatarProps> = ({
  src = "",
  name = "",
  size,
  variant = avatarType.SQUARE,
  ...rest
}) => {
  const classes = useStyles();
  const transformSource = (source: string) => {
    if (source) {
      if (source.includes("http")) {
        return source;
      }
      return `${source}`;
    }
    return "";
  };
  const url = useMemo(() => transformSource(src), [src]);
  return <div>Avatar</div>;
};

export { Avatar };
