const profile = {
  name: "alex",
  age: 20,
  coords: {
    lat: 0,
    lng: 15,
  },
  setAge(age: number): void {
    this.age = age;
  },
};

const { age }: { age: number } = profile; //have to write out the expected structure  of profile on the RHS
const {
  coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile;
