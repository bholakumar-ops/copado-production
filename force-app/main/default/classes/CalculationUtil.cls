/**
 * @description Utility class for common calculations.
 * Stateless, no database access, safe to use anywhere.
 */
public with sharing class CalculationUtil {

    /**
     * @description Thrown when an input value is invalid.
     */
    public class CalculationException extends Exception {
    }

    private static final Integer SCALE = 2;
    private static final Decimal HUNDRED = 100;

    private CalculationUtil() {
        // Utility class, do not instantiate.
    }

    /**
     * @description Divides two numbers and rounds to 2 decimal places.
     * @param dividend Number to divide
     * @param divisor Number to divide by, must not be zero
     * @return Rounded result
     */
    public static Decimal divide(Decimal dividend, Decimal divisor) {
        validateNotNull(dividend, 'dividend');
        validateNotNull(divisor, 'divisor');
        if (divisor == 0) {
            throw new CalculationException('Divisor cannot be zero.');
        }
        return dividend.divide(divisor, SCALE, RoundingMode.HALF_UP);
    }

    /**
     * @description Calculates what percentage a part is of a whole.
     * @param part The part value
     * @param whole The whole value, must not be zero
     * @return Percentage rounded to 2 decimal places
     */
    public static Decimal percentage(Decimal part, Decimal whole) {
        validateNotNull(part, 'part');
        validateNotNull(whole, 'whole');
        return divide(part * HUNDRED, whole);
    }

    /**
     * @description Calculates a percentage of a value, for example 10 percent of 200.
     * @param baseValue The value to take the percentage of
     * @param percent The percentage to apply
     * @return Result rounded to 2 decimal places
     */
    public static Decimal percentageOf(Decimal baseValue, Decimal percent) {
        validateNotNull(baseValue, 'baseValue');
        validateNotNull(percent, 'percent');
        return divide(baseValue * percent, HUNDRED);
    }

    /**
     * @description Calculates the average of a list of numbers.
     * @param numbers List of numbers
     * @return Average rounded to 2 decimal places, or 0 if the list is null or empty
     */
    public static Decimal average(List<Decimal> numbers) {
        if (numbers == null || numbers.isEmpty()) {
            return 0;
        }
        Decimal total = 0;
        for (Decimal current : numbers) {
            validateNotNull(current, 'number');
            total += current;
        }
        return divide(total, numbers.size());
    }

    /**
     * @description Calculates the price after a discount.
     * @param price Original price
     * @param discountPercent Discount from 0 to 100
     * @return Discounted price rounded to 2 decimal places
     */
    public static Decimal discountedPrice(Decimal price, Decimal discountPercent) {
        validateNotNull(price, 'price');
        validateNotNull(discountPercent, 'discountPercent');
        if (discountPercent < 0 || discountPercent > HUNDRED) {
            throw new CalculationException('Discount must be between 0 and 100.');
        }
        return price - percentageOf(price, discountPercent);
    }

    /**
     * @description Calculates simple interest.
     * @param principal Starting amount
     * @param ratePercent Yearly interest rate in percent
     * @param years Number of years
     * @return Interest amount rounded to 2 decimal places
     */
    public static Decimal simpleInterest(Decimal principal, Decimal ratePercent, Integer years) {
        validateNotNull(principal, 'principal');
        validateNotNull(ratePercent, 'ratePercent');
        validateYears(years);
        return divide(principal * ratePercent * years, HUNDRED);
    }

    /**
     * @description Calculates the final amount with yearly compound interest.
     * @param principal Starting amount
     * @param ratePercent Yearly interest rate in percent
     * @param years Number of years
     * @return Final amount rounded to 2 decimal places
     */
    public static Decimal compoundAmount(Decimal principal, Decimal ratePercent, Integer years) {
        validateNotNull(principal, 'principal');
        validateNotNull(ratePercent, 'ratePercent');
        validateYears(years);
        Double growth = 1 + (ratePercent.doubleValue() / HUNDRED.doubleValue());
        Double factor = Math.pow(growth, years);
        return Decimal.valueOf(principal.doubleValue() * factor).setScale(SCALE, RoundingMode.HALF_UP);
    }

    private static void validateNotNull(Decimal value, String fieldName) {
        if (value == null) {
            throw new CalculationException(fieldName + ' cannot be null.');
        }
    }

    private static void validateYears(Integer years) {
        if (years == null || years < 0) {
            throw new CalculationException('Years must be zero or more.');
        }
    }
}