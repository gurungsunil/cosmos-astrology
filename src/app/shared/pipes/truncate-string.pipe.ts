import { Pipe, PipeTransform } from '@angular/core'

/**
 * Helper to truncate text using JS in view only.
 *
 * This is pretty difficult to do reliably with CSS, especially when there are
 * multiple lines.
 *
 * Example: {{ value | truncateText:maxLength }} or {{ value | truncateText:45 }}
 *
 * If maxLength is not provided, the value will be returned without any truncating. If the
 * text is shorter than the maxLength, the text will be returned untouched. If the text is greater
 * than the maxLength, the text will be returned with 3 characters less than the max length plus
 * some ellipsis at the end to indicate truncation.
 *
 * For example: some really long text I won't bother writing it all ha...
 */
@Pipe({ name: 'truncateText' })
export class TruncateTextPipe implements PipeTransform {
  transform(value: string, ...args: any[]): any {
    const maxLength = args[0];
    const maxLengthNotProvided = !maxLength;
    const isShorterThanMaximumLength = value.length < maxLength;
    if (maxLengthNotProvided || isShorterThanMaximumLength) {
      return value;
    }
    const shortenedString = value.substr(0, maxLength - 3);
    return `${shortenedString}...`;
  }
}
