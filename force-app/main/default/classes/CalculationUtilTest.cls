/**
 * @description Test class for CalculationUtil.
 */
@IsTest
private class CalculationUtilTest {

    @IsTest
    static void divideReturnsRoundedResult() {
        System.runAs(getRunAsUser()) {
            Decimal result = CalculationUtil.divide(10, 3);

            Assert.areEqual(3.33, result, 'Should round to 2 decimal places');
        }
    }

    @IsTest
    static void divideByZeroThrowsException() {
        System.runAs(getRunAsUser()) {
            try {
                CalculationUtil.divide(10, 0);
                Assert.fail('Expected CalculationException');
            } catch (CalculationUtil.CalculationException ex) {
                Assert.isTrue(ex.getMessage().contains('zero'), 'Message should mention zero');
            }
        }
    }

    @IsTest
    static void divideNullThrowsException() {
        System.runAs(getRunAsUser()) {
            try {
                CalculationUtil.divide(null, 5);
                Assert.fail('Expected CalculationException');
            } catch (CalculationUtil.CalculationException ex) {
                Assert.isTrue(ex.getMessage().contains('null'), 'Message should mention null');
            }
        }
    }

    @IsTest
    static void percentageReturnsCorrectValue() {
        System.runAs(getRunAsUser()) {
            Decimal result = CalculationUtil.percentage(25, 200);

            Assert.areEqual(12.50, result, '25 of 200 should be 12.50 percent');
        }
    }

    @IsTest
    static void percentageOfReturnsCorrectValue() {
        System.runAs(getRunAsUser()) {
            Decimal result = CalculationUtil.percentageOf(200, 10);

            Assert.areEqual(20.00, result, '10 percent of 200 should be 20.00');
        }
    }

    @IsTest
    static void averageReturnsCorrectValue() {
        System.runAs(getRunAsUser()) {
            List<Decimal> numbers = new List<Decimal>{ 10, 20, 30 };

            Decimal result = CalculationUtil.average(numbers);

            Assert.areEqual(20.00, result, 'Average of 10, 20, 30 should be 20.00');
        }
    }

    @IsTest
    static void averageNullOrEmptyReturnsZero() {
        System.runAs(getRunAsUser()) {
            Decimal nullResult = CalculationUtil.average(null);
            Decimal emptyResult = CalculationUtil.average(new List<Decimal>());

            Assert.areEqual(0, nullResult, 'Null list should return 0');
            Assert.areEqual(0, emptyResult, 'Empty list should return 0');
        }
    }

    @IsTest
    static void averageWithNullElementThrowsException() {
        System.runAs(getRunAsUser()) {
            List<Decimal> numbers = new List<Decimal>{ 10, null };

            try {
                CalculationUtil.average(numbers);
                Assert.fail('Expected CalculationException');
            } catch (CalculationUtil.CalculationException ex) {
                Assert.isTrue(ex.getMessage().contains('null'), 'Message should mention null');
            }
        }
    }

    @IsTest
    static void discountedPriceReturnsCorrectValue() {
        System.runAs(getRunAsUser()) {
            Decimal result = CalculationUtil.discountedPrice(100, 25);

            Assert.areEqual(75.00, result, '25 percent off 100 should be 75.00');
        }
    }

    @IsTest
    static void discountedPriceInvalidDiscountThrowsException() {
        System.runAs(getRunAsUser()) {
            try {
                CalculationUtil.discountedPrice(100, 150);
                Assert.fail('Expected CalculationException');
            } catch (CalculationUtil.CalculationException ex) {
                Assert.isTrue(ex.getMessage().contains('between'), 'Message should mention the range');
            }
        }
    }

    @IsTest
    static void simpleInterestReturnsCorrectValue() {
        System.runAs(getRunAsUser()) {
            Decimal result = CalculationUtil.simpleInterest(1000, 5, 2);

            Assert.areEqual(100.00, result, 'Interest should be 100.00');
        }
    }

    @IsTest
    static void simpleInterestNegativeYearsThrowsException() {
        System.runAs(getRunAsUser()) {
            try {
                CalculationUtil.simpleInterest(1000, 5, -1);
                Assert.fail('Expected CalculationException');
            } catch (CalculationUtil.CalculationException ex) {
                Assert.isTrue(ex.getMessage().contains('Years'), 'Message should mention years');
            }
        }
    }

    @IsTest
    static void compoundAmountReturnsCorrectValue() {
        System.runAs(getRunAsUser()) {
            Decimal result = CalculationUtil.compoundAmount(1000, 10, 2);

            Assert.areEqual(1210.00, result, 'Final amount should be 1210.00');
        }
    }

    @IsTest
    static void compoundAmountNullYearsThrowsException() {
        System.runAs(getRunAsUser()) {
            try {
                CalculationUtil.compoundAmount(1000, 10, null);
                Assert.fail('Expected CalculationException');
            } catch (CalculationUtil.CalculationException ex) {
                Assert.isTrue(ex.getMessage().contains('Years'), 'Message should mention years');
            }
        }
    }

    private static User getRunAsUser() {
        return new User(Id = UserInfo.getUserId());
    }
}