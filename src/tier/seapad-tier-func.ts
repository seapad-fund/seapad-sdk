import { GasBudget, OptionTx } from '../common';

export abstract class SeaPadTierFunc<T> {
  /**
   *
   * @param types <TOKEN>
   * @param args admin_cap: AdminCap, to: address
   */
  abstract changeAdmin(
    args: { admin_cap: string; to: string },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  /**
   *
   * @param types <TOKEN>
   * @param args _admin: &TAdminCap, minLock: u64, lockPeriodMs: u64
   */
  abstract createPool(
    types: { TOKEN: string; },
    args: {
      admin_cap: string;
      minLock: string;
      lockPeriodMs: string;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  /**
 *
 * @param types <TOKEN>
 * @param args _admin: &TAdminCap, pool: &mut Pool<TOKEN<>>, emergency: bool
 */
  abstract setEmergency(
    types: { TOKEN: string; },
    args: {
      admin_cap: string;
      pool: string;
      emergency: boolean;
    },
    optionTx?: OptionTx,
    gasBudget?: GasBudget,
    packageObjectId?: string | null,
  ): T;

  /**
*
* @param types <TOKEN>
* @param args deal: Coin<TOKEN>, pool: &mut Pool<TOKEN>, sclock: &Clock
*/
abstract lock(
  types: { TOKEN: string; },
  args: {
    amount: string;
    deal: string[];
    pool: string;
  },
  optionTx?: OptionTx,
  gasBudget?: GasBudget,
  packageObjectId?: string | null,
): T;

  /**
*
* @param types <TOKEN>
* @param args pool: &mut Pool<TOKEN>, sclock: &Clock
*/
abstract unlock(
  types: { TOKEN: string; },
  args: {
    amount: string;
    pool: string;
  },
  optionTx?: OptionTx,
  gasBudget?: GasBudget,
  packageObjectId?: string | null,
): T;

  /**
*
* @param types <TOKEN>
* @param args pool: &mut Pool<TOKEN>, sclock: &Clock
*/
abstract unlockEmergency(
  types: { TOKEN: string; },
  args: {
    pool: string;
  },
  optionTx?: OptionTx,
  gasBudget?: GasBudget,
  packageObjectId?: string | null,
): T;

}
