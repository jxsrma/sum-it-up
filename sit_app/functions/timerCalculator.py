import time


def timeTaken(end, start):
    timeTaken = round(end - start)
    if timeTaken < 59:
        if timeTaken == 0 or timeTaken == 1:
            timeTaken = str(timeTaken) + " sec"
        else:
            timeTaken = str(timeTaken) + " secs"
    else:
        mints = timeTaken / 60
        if timeTaken == 1:
            timeTaken = str(mints) + " mint"
        else:
            timeTaken = str(mints) + " mints"

    return timeTaken


def now():
    return time.time()

print(now())
