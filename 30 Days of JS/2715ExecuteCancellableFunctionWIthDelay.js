/* Given a function fn, an array or arguments args, and a timeout t in milliseconds, return a cancel function cancelFn.

After a delay of t, fn should be called with args passed as parameters unless cancelFn was called first. In that case, fn should never be called.

 

Example 1:

Input: fn = (x) => x * 5, args = [2], t = 20, cancelTime = 50
Output: [{"time": 20, "returned": 10}]
Explanation: 
const cancel = cancellable(fn, [2], 20); // fn(2) called at t=20ms
setTimeout(cancel, 50);

the cancelTime (50ms) is after the delay time (20ms), so fn(2) should be called at t=20ms. The value returned from fn is 10.
Example 2:

Input: fn = (x) => x**2, args = [2], t = 100, cancelTime = 50
Output: []
Explanation: fn(2) was never called because cancelTime (50ms) is before the delay time (100ms).
Example 3:

Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30, cancelTime = 100
Output: [{"time": 30, "returned": 8}]
Explanation: fn(2, 4) was called at t=30ms because cancelTime > t.
 

Constraints:

fn is a function
args is a valid JSON array
1 <= args.length <= 10
20 <= t <= 1000
10 <= cancelT <= 1000 */

var cancellable = (fn, args, t) => {
  var timeoutId = setTimeout(() => {
    fn.apply(null, args);
  }, t);

  var cancelFn = () => {
    clearTimeout(timeoutId);
  };

  return cancelFn;
};
