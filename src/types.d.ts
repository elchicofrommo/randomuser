export type User = {

    gender: string,
    name: {
      title,
      first,
      last
    },
    location: {
      street,
      city,
      state,
      postcode,
      coordinates: {
        latitude,
        longitude
      },
      timezone: {
        offset,
        description
      }
    },
    emailm
    login: {
      uuid,
      username,
      password,
      salt,
      md5,
      sha1,
      sha256,
    },
    dob: {
      date,
      age,
    },
    registered: {
      date,
      age,
    },
    phone,
    cell,
    id: {
      name,
      value
    },
    picture: {
      large,
      medium,
      thumbnail
    },
    nat
}