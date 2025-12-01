class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {

		if (!time) {
			throw new Error('Отсутствуют обязательные аргументы');
		}
		if (!callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		}


		const exists = this.alarmCollection.some(alarm => alarm.time === time);
		if (exists) {
			console.warn('Уже присутствует звонок на это же время');
			return;
		}


		this.alarmCollection.push({
			callback: callback,
			time: time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(alarm => alarm.time !== time);
	}

	getCurrentFormattedTime() {
		return new Date().toLocaleTimeString("ru-RU", {
			hour: "2-digit",
			minute: "2-digit"
		});
	}

	start() {

		if (this.intervalId) {
			return;
		}


		this.intervalId = setInterval(() => {
			const currentTime = this.getCurrentFormattedTime();

			this.alarmCollection.forEach(alarm => {

				if (alarm.time === currentTime && alarm.canCall) {
					alarm.canCall = false;
					alarm.callback();
				}
			});
		}, 1000);
	}

	stop() {
		if (this.intervalId) {
			clearInterval(this.intervalId);
			this.intervalId = null;
		}
	}

	resetAllCalls() {
		this.alarmCollection.forEach(alarm => {
			alarm.canCall = true;
		});
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}