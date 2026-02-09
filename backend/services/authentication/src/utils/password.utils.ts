import * as aragon2 from 'argon2';

export class PasswordUtils {
  static hash(password: string) {
    return aragon2.hash(password, {
      type: aragon2.argon2id,
      memoryCost: 2 ** 16,
      timeCost: 3,
    });
  }

  static verify(hash: string, password: string) {
    return aragon2.verify(hash, password);
  }
}
